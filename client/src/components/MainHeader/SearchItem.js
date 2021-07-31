import { useRef, useState } from "react";
import { SearchOutlined } from "@material-ui/icons";
import searchProduct from "../../helper/api/search";
import "./custom_style.css";
import { Link } from "react-router-dom";

const SearchItem = () => {
    const [searchItems, setSearchItems] = useState([]);
    const searchInput = useRef();

    const handleSearch = async (e) => {
        if (e.target.value === "") {
            setSearchItems([]);
            return;
        }
        const data = await searchProduct(e.target.value);
        setSearchItems(data);
    };
    const clearSearch = () => {
        searchInput.current.value = "";
        setSearchItems([]);
    };
    return (
        <div className="flex flex-col">
            <div className="flex">
                <input
                    type="text"
                    ref={searchInput}
                    placeholder="search products..."
                    className="outline-none border-b-2 width-adjust"
                    onChange={handleSearch}
                ></input>

                <SearchOutlined
                    fontSize="large"
                    className="search-icon"
                    onClick={handleSearch}
                />
            </div>
            {searchItems.length > 0 ? (
                <div className="results z-10 overflow-visible">
                    {searchItems.map((item) => {
                        return (
                            <Link to={`/product/${item.id}`}>
                                <h1
                                    className="text-lg border-b-2 pl-2 py-1 border-gray-400 hover:bg-gray-600 hover:text-gray-200"
                                    onClick={clearSearch}
                                >
                                    {item.name}
                                </h1>
                            </Link>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
};

export default SearchItem;
