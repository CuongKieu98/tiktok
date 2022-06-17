import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless"; // different import path!
import { Wrapper as PopperWrapper } from "~/components/Popper";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import AccountItem from "~/components/AccountItem";
import styles from "./../Header/Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Search() {
  const ref = useRef();

  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult,setShowResult] = useState(true);
  const [loading,setLoading] = useState(false);
  
  useEffect(() =>{
    if(!searchValue.trim()) {
        setSearchResult([])
        return
    };
    setLoading(true);
    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
    .then(res =>res.json())
    .then(res =>{
        setSearchResult(res.data);
        setLoading(false)
    })
    .catch(() =>{
        setLoading(false)
    })
  },[searchValue])
  const handleClear = () =>{
    setSearchValue("");
    setSearchResult([])
    ref.current.focus();
  }
  
  const handleHideResult = () =>{
    setShowResult(false)
  }

  return (
    <>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult?.length > 0}
        onClickOutside={handleHideResult}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <div className={cx("search-item")}>
                <div className={cx("account-title")}>Tài khoản</div>
                {searchResult?.map(result =>(
                    <AccountItem key={result.id} data={result}/>
                ))}
              </div>
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx("search")}>
          <input
            ref={ref}
            value={searchValue}
            placeholder="Search accounts and videos"
            className={cx("search-input")}
            spellCheck={false}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowResult(true)}
          />
          <span className={cx("search-spliter")}></span>
          {!!searchValue &&!loading && (
            <button className={cx("clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />}

          <button className={cx("search-button")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </>
  );
}

export default Search;
