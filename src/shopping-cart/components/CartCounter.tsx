'use client'
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, removeOne } from "@/store/counter/counterSlice";
import { useEffect, useState } from "react"

interface Props {
    value?: number;
}

export interface CounterResponse {
    method: string;
    count: number;
}

const getApiCounter = async ():Promise<CounterResponse> => {
    const data = await fetch('/api/counter').then(res => res.json());

    return data;
}

const CartCounter = ({ value = 10}:Props) => {

    const count = useAppSelector(state => state.count.count);
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(initCounterState(value));
    // }, [value, dispatch]);
    useEffect(() => {
        getApiCounter().then(({count}) => dispatch(initCounterState(count)));
    }, [dispatch]);

    // const [count, setCount] = useState(value)
    return (
        <>
            <span className="text-9xl ">{count}</span>
            <div className="flex">
                <button
                    onClick={() => dispatch(addOne())}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    +1
                </button>
                <button
                    onClick={() => dispatch(removeOne())}

                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    -1
                </button>

            </div>

        </>

    )
}

export default CartCounter