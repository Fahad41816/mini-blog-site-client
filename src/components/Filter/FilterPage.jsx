import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {FilterAction} from '../../features/Filter/FilterSlice'


const FilterPage = () => {
  const dispatch = useDispatch()
  const [FilterValue , setFilterValue] = useState('All') 
  const sortHandler = (e) => {
      const SortValue = e.target.value
      console.log(SortValue)
      dispatch(FilterAction.sortBlog(SortValue))
  }

  const filterHandler = (e) => {
     
   dispatch( FilterAction.filterBog(e.target.value))
   setFilterValue(e.target.value)
  }
    return (
        <aside>
        <div className="sidebar-items">
          <div className="sidebar-content">
            <h4>Sort</h4>
            <select  onChange={sortHandler} name="sort" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500">
              <option value="">Default</option>
              <option value="createdAt">Newest</option>
              <option value="likes">Most Liked</option>
            </select>
          </div>
          <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group" onChange={filterHandler}>
              {/* <!-- handle filter on button click --> */}
              <div>
                <input type="radio" name="filter" value='All' id="lws-all"  className="radio" checked={FilterValue == "All" && true}  />
                <label htmlFor="lws-all">All</label>
              </div>
              <div>
                <input type="radio" name="filter"  value='saved' id="lws-saved" className="radio"  checked={FilterValue == "saved" && true} / >
                <label htmlFor="lws-saved">Saved</label>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
};

export default FilterPage;