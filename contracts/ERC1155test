// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/ERC1155PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/ERC1155BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/ERC1155SupplyUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

import "@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/common/ERC2981Upgradeable.sol";

contract ERC1155test is 
Initializable, 
ERC1155Upgradeable, 
AccessControlUpgradeable, 
ERC1155PausableUpgradeable, 
ERC1155BurnableUpgradeable, 
ERC1155SupplyUpgradeable,
ReentrancyGuardUpgradeable,
ERC2981Upgradeable 
{
    using StringsUpgradeable for uint256;
    // bytes32 public constant URI_SETTER_ROLE = keccak256("URI_SETTER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    
    mapping(uint256 => string) private _tokenURIs;
    address public adminAddress;
    uint256 public startTokenId;
    uint256 public endTokenId;

    function initialize(address defaultAdmin, address pauser, address minter)
        initializer public
    {
        __ERC1155_init("");
        __AccessControl_init();
        __ERC1155Pausable_init();
        __ERC1155Burnable_init();
        __ERC1155Supply_init();

        _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);
        _grantRole(PAUSER_ROLE, pauser);
        _grantRole(MINTER_ROLE, minter);

        startTokenId = 1;
        endTokenId = 5;
    }

    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data)
        public
        onlyRole(MINTER_ROLE)
    {
        require(id >= startTokenId && id <= endTokenId, "Invalid token ID");
        _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyRole(MINTER_ROLE)
    {
        _mintBatch(to, ids, amounts, data);
    }

    function _update(address from, address to, uint256[] memory ids, uint256[] memory values)
        internal
        override(ERC1155Upgradeable, ERC1155PausableUpgradeable, ERC1155SupplyUpgradeable)
    {
        super._update(from, to, ids, values);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155Upgradeable, AccessControlUpgradeable, ERC2981Upgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

// Admin Func

    function setTokenURI(string memory newUri) public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(startTokenId <= endTokenId, "Invalid token range");
        for (uint256 i = startTokenId; i <= endTokenId; i++) {
            _tokenURIs[i] = string(abi.encodePacked(newUri, "/", StringsUpgradeable.toString(i), ".json"));
        }
    }

    function uri(uint256 tokenId) public view override returns (string memory) {
        require(tokenId >= startTokenId && tokenId <= endTokenId, "Invalid token ID");
        return _tokenURIs[tokenId];
    }

    function setStartTokenId(uint256 _newstartTokenId) public onlyRole(MINTER_ROLE) {
        startTokenId = _newstartTokenId;
    }

    function setEndTokenId(uint256 _newendTokenId) public onlyRole(MINTER_ROLE) {
        endTokenId = _newendTokenId;
    }
}
