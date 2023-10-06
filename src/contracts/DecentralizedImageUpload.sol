// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DecentralizedImageStorage {
    struct ImageDetail {
        bytes cid; // Content Identifier for the image
        string name; //   name of the image
    }

    struct UserProfile {
        ImageDetail[] imageList; // List of images for the user
        mapping(bytes => uint256) imageIndex; // Mapping of CID to its index in the list for O(1) removal
    }

    mapping(address => UserProfile) private userProfiles;

    event ImageAdded(address indexed user, bytes cid, string name);
    event ImageRemoved(address indexed user, bytes cid);

    // Add multiple images to the user's profile
    function addImages(bytes[] memory cids, string[] memory names) public {
        require(cids.length == names.length, "Arrays of CIDs and names must have the same length");

        for (uint256 i = 0; i < cids.length; i++) {
            require(cids[i].length > 0, "CID cannot be empty");
            require(bytes(names[i]).length > 0, "name cannot be empty");
            require(userProfiles[msg.sender].imageIndex[cids[i]] == 0, "CID already exists for the user");

            userProfiles[msg.sender].imageList.push(ImageDetail(cids[i], names[i]));
            userProfiles[msg.sender].imageIndex[cids[i]] = userProfiles[msg.sender].imageList.length; // Pointing to the position+1, because 0 means it doesn't exist

            emit ImageAdded(msg.sender, cids[i], names[i]);
        }
    }

    // Remove images from the user's profile
    function removeImages(bytes[] memory cids) public {
        for (uint256 i = 0; i < cids.length; i++) {
            uint256 index = userProfiles[msg.sender].imageIndex[cids[i]];
            require(index > 0, "Image not found for the user"); // Because 0 means it doesn't exist
            index--; // Adjusting because we stored position+1
            
            uint256 lastIndex = userProfiles[msg.sender].imageList.length - 1;
            if (index != lastIndex) {
                userProfiles[msg.sender].imageList[index] = userProfiles[msg.sender].imageList[lastIndex];
                userProfiles[msg.sender].imageIndex[userProfiles[msg.sender].imageList[index].cid] = index + 1; // Adjusting index for swapped image
            }
            
            userProfiles[msg.sender].imageList.pop();
            delete userProfiles[msg.sender].imageIndex[cids[i]];

            emit ImageRemoved(msg.sender, cids[i]);
        }
    }

    // Get all images of the calling user
    function getUserImages() public view returns (ImageDetail[] memory) {
        return userProfiles[msg.sender].imageList;
    }
}