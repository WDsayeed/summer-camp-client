

const InstructorData = ({instructor}) => {
        const {name, photo, email} = instructor
        return (
                <div className="card card-compact bg-base-100 shadow-xl">
                <figure className="h-60"><img className="h-full w-full" src={photo} alt="Shoes" /></figure>
                <div className="card-body text-center">
                  <h2 className="text-xl font-semibold">{name}</h2>
                  <p>{email}</p>
                  
                </div>
              </div>
        );
};

export default InstructorData;