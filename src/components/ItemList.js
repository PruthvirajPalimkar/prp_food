import { VscCommentUnresolved } from 'react-icons/vsc';
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items, dummy }) => {
    console.log(dummy);
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        // console.log("items: ",items)
        <div>
            {items.map((item) => (
                <div
                    key={item.card.info.id}
                    className='p-2 m-2 border-b-2 text-left flex justify-between'>
                    <div className="w-9/12">
                        <div className='py-2'>
                            <span>{item.card.info.name}</span>
                            <span>
                            {item.card.info.costForTwo}
                            </span>
                        </div>
                        <p className='text-xs'>{item.card.info.description}</p>
                    </div>
                    <div className='w-3/12 p-4'>
                        <div className='absolute'>
                            <button className="p-2 ml-6 mt-[70px] rounded-lg bg-black text-white shadow-lg hover:bg-white hover:text-black transition-all duration-[.3s]"
                            onClick={() => handleAddItem(item)}>
                                Add+
                            </button>
                        </div>
                        <img 
                        src={CDN_URL + item.card.info.imageId}
                        className="w-full rounded-md"
                        /> 
                    </div>
                </div>
            ))}
        </div>
    );
};


export default ItemList;