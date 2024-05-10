import styles from './list.module.css'

type ListItem = {
  id?: string
  title: string
  subtitle: string | JSX.Element
  imgUrl?: string
}

const Item = (item: ListItem) => {
  return (
    <li id={item.id}>
      {item.imgUrl && <img src={item.imgUrl} />}
      <span className={styles.itemText}>
        <h3 className={styles.itemTitle}>{item.title}</h3>
        <span className={styles.subtitle}>{item.subtitle}</span>
      </span>
    </li>
  )
}

export const List = ({ items }: { items: ListItem[] }) => {
  return <ul className={styles.list}>{items.map(Item)}</ul>
}
