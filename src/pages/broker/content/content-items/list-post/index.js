import React from "react";
import RealEstate from "../../../../../shared/components/list/list-item/real-estate";
import List from '../../../../../shared/components/list';
import data from '../../../../../assets/jsonData/real-estate.json';

const ListPost = () => {
    return (
        <div>
            <List items={data} component={RealEstate} />
        </div>
    )
}

export default ListPost;
