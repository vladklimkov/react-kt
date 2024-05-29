import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllCategories, fetchCategories } from '../../ui/categories/categoriesSlice'
import Category from '../../ui/category/Category'

export default function Categories ({width = '1em', count}) {
    count = count || 10e7
    count = +count

    const dispatch = useDispatch()
    const categories = useSelector(selectAllCategories)

    const status = useSelector((state) => state.categories.status)
    const error = useSelector((state) => state.categories.error)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategories())
        }
    }, [status, dispatch])

    let content

    if (status === 'loading') {
        //   content = <Spinner text="Loading..." />
    } else if (status === 'succeeded') {
        const sl = categories.slice(0, count)
        content = sl.map((category) => (<Category category={category} width={width} key={crypto.randomUUID()} />))
    } else if (status === 'failed') {
        content = <div>{error}</div>
    }

    return (
        <section className="d-flex flex-wrap align-items-start justify-content-center">
            {content}
        </section>
    )
};