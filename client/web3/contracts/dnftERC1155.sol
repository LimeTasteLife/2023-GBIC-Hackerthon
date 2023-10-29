// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.sol";

contract MyERC1155 is ERC1155PresetMinterPauser {
    constructor() ERC1155PresetMinterPauser("1") {}

    using Strings for uint256;

    // Optional base URI
    string private _baseURI =
        "https://c6b8e7180c3c42db758973559ad7f50d.ipfscdn.io/ipfs/";

    // Optional mapping for token URIs
    uint public nextSeriesId = 10;
    mapping(uint256 => string) private _tokenURIs;

    function mintSeries(
        address to,
        uint256 seriesId,
        uint256 amount,
        string[] memory tokenURIs,
        bytes memory data
    ) external {
        uint256 hnextSeriesId = seriesId * 10;
        for (uint i = 0; i < tokenURIs.length; i++) {
            _setURI(hnextSeriesId, tokenURIs[i]);
            _mint(to, hnextSeriesId, amount, data);
            hnextSeriesId++;
        }
    }

    function uri(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        string memory tokenURI = _tokenURIs[tokenId];

        // If token URI is set, concatenate base URI and tokenURI (via abi.encodePacked).
        return
            bytes(tokenURI).length > 0
                ? string(abi.encodePacked(_baseURI, tokenURI))
                : super.uri(tokenId);
    }

    function setURI(uint256 tokenId, string memory tokenURI) public {
        _setURI(tokenId, tokenURI);
    }

    /**
     * @dev Sets `tokenURI` as the tokenURI of `tokenId`.
     */
    function _setURI(uint256 tokenId, string memory tokenURI) internal virtual {
        _tokenURIs[tokenId] = tokenURI;
        emit URI(uri(tokenId), tokenId);
    }

    function setBaseURI(string memory baseURI) public {
        _setBaseURI(baseURI);
    }

    /**
     * @dev Sets `baseURI` as the `_baseURI` for all tokens
     */
    function _setBaseURI(string memory baseURI) internal virtual {
        _baseURI = baseURI;
    }
}
