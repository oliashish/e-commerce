import { SearchOutlined } from "@material-ui/icons";
import searchProduct from "../../helper/api/search";

const SearchItem = () => {
    const handleSearch = (e) => {
        searchProduct(e.target.value);
    };
    return (
        <>
            <div className="flex">
                <input
                    type="text"
                    placeholder="search products..."
                    className="outline-none border-b-2"
                    onChange={handleSearch}
                ></input>
                <SearchOutlined fontSize="large" />
            </div>
            <div className="results"></div>
        </>
    );
};

export default SearchItem;
