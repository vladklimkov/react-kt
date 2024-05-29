import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom'
import styles from './Category.module.css';

export default function Category({ category, width }) {
    return (
        <Figure as={Link} to={`/category/${category.id}`} className={`mx-3 text-decoration-none ${styles.h400}`}>
            <Figure.Image
                className={`rounded ${styles.cover}`}
                width={width}
                height={320}
                alt={category.title}
                src={"http://localhost:3333" + category.image}
            />
            <Figure.Caption className='text-center text-dark fs-5'>{category.title}</Figure.Caption>
        </Figure>
    );
};