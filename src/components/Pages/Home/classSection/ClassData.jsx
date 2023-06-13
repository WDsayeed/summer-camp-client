

const ClassData = ({clsData}) => {
        const {photo, name, instructor,  price} = clsData
        // console.log(clsData)
        return (
                <div className="card card-compact  bg-base-100 shadow-xl">
                <figure className="h-[260px]">
                  <img
                  className="h-full w-full"
                    src={photo}
                    alt=""
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{name}</h2>
                  <p>Instructor name: {instructor}</p>
                  <p>Price: ${price}</p>
                </div>
              </div>
        );
};

export default ClassData;