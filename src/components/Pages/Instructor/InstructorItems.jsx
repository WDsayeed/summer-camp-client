const InstructorItems = ({ instructor }) => {
  const { photo, name, email } = instructor;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className="h-56">
        <img
        className="h-full w-full"
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-3xl">{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default InstructorItems;
