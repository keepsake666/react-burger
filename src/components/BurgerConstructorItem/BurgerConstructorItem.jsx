import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerConstructorItem.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch } from 'react-redux';
import { DELETE_INGREDIEN, DROP_INGREDIENTS } from '../../services/action/action';
import { useDrag, useDrop } from "react-dnd";

export default function BurgerConstructorItem({ text, price, image, indexItem, id }) {
  const dispatch = useDispatch();
  const ref = useRef(null)
  const deleteIngredient = (index) => {
    dispatch({
      type: DELETE_INGREDIEN,
      deleteItem: index
    })
  }

  const [{ handlerId }, drop] = useDrop({
    accept: 'item',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index;
      const hoverIndex = indexItem;

      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      if (dragIndex) {
        dispatch({
          type: DROP_INGREDIENTS,
          dragIndex: dragIndex,
          hoverIndex: hoverIndex
        })
      }
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: 'item',
    item: { id, indexItem },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0.3 : 1
  drag(drop(ref))

  return (
    <>
      <li className={styles.item} ref={ref} style={{ opacity }} data-handler-id={handlerId} >
        <DragIcon />
        <ConstructorElement
          text={text}
          price={price}
          thumbnail={image}
          handleClose={() => deleteIngredient(indexItem)}
        />
      </li>
    </>
  )
}

BurgerConstructorItem.propTypes = {
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  indexItem: PropTypes.number.isRequired
}; 