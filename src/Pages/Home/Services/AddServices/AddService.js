import React from 'react';

const AddService = () => {
    const handleAddService = e => {
        e.preventDefault()
        const form = e.target;
        const serviceName = form.serviceName.value;
        const serviceUrl = form.serviceUrl.value;
        const packageName = form.packageName.value;
        const totalDays = form.totalDays.value;
        const price = form.price.value;
        const serviceDetails = form.serviceDetails.value;
        const itinerary = form.itinerary.value;

        console.log(serviceName, serviceUrl, packageName, totalDays, price, serviceDetails, itinerary);
        const service = {
            name: serviceName,
            img: serviceUrl,
            packageName: packageName,
            days: totalDays,
            price: price,
            discription: serviceDetails,
            itinerary: itinerary,
        }

        fetch('http://localhost:4000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form.reset()
                    // ai khane akta toast dite hobe 
                    alert('Thank you for share your Experience')
                }
            })
            .catch(err => console.error(err))


    }


    return (
        <div>
            <form onSubmit={handleAddService}
                className="card flex-shrink-0 lg:w-1/2 md:w-3/4 sm:w-full  shadow-2xl bg-base-100 mx-auto my-10">
                <div className=" card-body">
                    <div className="form-control">
                        <div className=' w-full mb-5  h-1 rounded-sm  bg-cyan-700'></div>
                    </div>
                    <p className='text-2xl font-bold'>Add Service</p>
                    <div className="form-control">
                        <label className="input-group input-group-lg">
                            <span className=' w-1/2'>Service Name</span>
                            <input type="text" name='serviceName'
                                placeholder="Service Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group input-group-lg">
                            <span className=' w-1/2'>Service URl</span>
                            <input type="text" name='serviceUrl'
                                placeholder="Service Photo URl" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group input-group-lg">
                            <span className=' w-1/2'>Package Name</span>
                            <input type="text" name='packageName'
                                placeholder="Package Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group input-group-lg">
                            <span className=' w-1/2'>Total Days</span>
                            <input type="text" name='totalDays'
                                placeholder="Total Days" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group input-group-lg">
                            <span className=' w-1/2'>Price</span>
                            <input type="text" name='price'
                                placeholder="Price per person" className="input input-bordered w-full" required />
                        </label>
                    </div>

                    <div className="form-control">
                        <textarea type="text" name='serviceDetails'
                            className="textarea textarea-bordered h-24 text-lg" placeholder="Write Service Details" required ></textarea>
                    </div>
                    <div className="form-control">
                        <textarea type="text" name='itinerary'
                            className="textarea textarea-bordered h-24 text-lg" placeholder="Write Itinerary(Optional)"></textarea>
                    </div>

                    <div className="form-control mt-6 mb-4">
                        <button type='submit' className="btn btn-primary bg-cyan-800 text-white   hover:bg-cyan-800 border-none hover:drop-shadow-2xl ">Submit Service</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddService;