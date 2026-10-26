export default function ItemCompra(props) {
  const { item, onToggle, onDelete } = props

  return (
    <li>
      <input
        type="checkbox"
        checked={item.comprado}
        onChange={() => onToggle(item.id)}
      />

      <span
        style={{
          textDecoration: item.comprado ? "line-through" : "none"
        }}
      >
        {item.nombre}
      </span>

      <button onClick={() => onDelete(item.id)}>
        ✕
      </button>
    </li>
  )
}
