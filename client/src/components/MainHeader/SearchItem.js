import { useState } from "react";
import { SearchOutlined } from "@material-ui/icons";
import searchProduct from "../../helper/api/search";
import "./custom_style.css";

const SearchItem = () => {
    const [searchItems, setSearchItems] = useState([]);
    const handleSearch = async (e) => {
        const data = await searchProduct(e.target.value);
        setSearchItems(data);
    };
    return (
        <>
            <div className="flex">
                <input
                    type="text"
                    placeholder="search products..."
                    className="outline-none border-b-2 width-adjust"
                    onChange={handleSearch}
                ></input>

                <SearchOutlined fontSize="large" className="search-icon"/>
            </div>
            {searchItems.length > 0 ? (
                <div className="results block z-10">
                    {searchItems.map((item) => {
                        return (
                            <div>
                                <h1>{item.name}</h1>
                            </div>
                        );
                    })}
                </div>
            ) : null}
        </>
    );
};

export default SearchItem;
