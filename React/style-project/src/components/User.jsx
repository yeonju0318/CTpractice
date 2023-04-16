const User = ({ item, deleteButtonHandler }) => {
  return (
    <div key={item.id} className="component-style">
      {item.age} - {item.name}
      <button onClick={() => deleteButtonHandler(item.id)}>x</button>
    </div>
  );
};

export default User;
