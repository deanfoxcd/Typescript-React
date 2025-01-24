const EventComponent: React.FC = function () {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e);
  }

  return (
    <div>
      <input onChange={onChange} />
    </div>
  );
};

export default EventComponent;
