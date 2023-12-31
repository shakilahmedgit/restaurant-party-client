

import { useLoaderData } from 'react-router-dom';
import '../index.css';
import toast from 'react-hot-toast';

const UpdateFood = () => {

    const foods = useLoaderData();
    // console.log(foods);
    const { _id, name, image, description, price, made, category, country, rating } = foods || {};

    const updateFood = e => {
        e.preventDefault();

        const form  = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const image = form.image.value;
        const category = form.category.value;
        const description = form.description.value;
        const made = form.made.value;
        const country = form.country.value;
        const rating = form.rating.value;

        const updateFood = {name, price, image, category, description, made, country, rating};
        console.log(updateFood);

        // add a new item
        fetch(`https://restaurant-public-server-jmrq3szqz.vercel.app/foods/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateFood),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                toast.success(`Updated food successfully ${name}`)
            }
        })
    };

    return (
        <div className=" min-h-screen bg-base-200 flex items-center justify-center py-20 ">
            <div className="hero-content w-full flex-col-reverse md:flex-row justify-center">

                <div className="text-center mb-2 mt-16 md:mt-0 md:w-[45%]">
                    {/* <h1 className="text-5xl font-bold mb-14">Signup now!</h1> */}
                    <img className='md:w-full lg:w-[85%]' src="https://i.ibb.co/hYHTbB5/about-img.png" alt="" />
                </div>

                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={updateFood} className="card-body" data-aos="flip-right">
                        <h2 className="text-2xl font-semibold text-center dancing">Update Food</h2>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text dancing font-bold text-lg">Food Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" defaultValue={name} className=" text-xs focus:outline-none focus:border-[2px] focus:border-[#5dff33]  input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text dancing font-bold text-lg">Food Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" defaultValue={price} className=" text-xs focus:outline-none focus:border-[2px] focus:border-[#5dff33]  input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text dancing font-bold text-lg">Food Image</span>
                        </label>
                        <input type="text" placeholder="Example: https://image.jpg" name="image" defaultValue={image} className=" text-xs focus:outline-none focus:border-[2px] focus:border-[#5dff33]  input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text dancing font-bold text-lg">Food Category</span>
                        </label>
                        <input type="text" placeholder="Category..." name="category" defaultValue={category} className=" text-xs focus:outline-none focus:border-[2px] focus:border-[#5dff33]  input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text dancing font-bold text-lg">Top Sell Food</span>
                        </label>
                        <input type="text" placeholder="Top or Hot" name="rating" defaultValue={rating} className=" text-xs focus:outline-none focus:border-[2px] focus:border-[#5dff33]  input input-bordered" />
                        </div>

                        <div className='md:flex md:justify-between gap-5'>
                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text dancing font-bold text-lg">Made By</span>
                            </label>
                            <input type="text" placeholder="John" name="made" defaultValue={made} className=" text-xs focus:outline-none focus:border-[2px] focus:border-[#5dff33]  input input-bordered" required />
                            </div>

                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text dancing font-bold text-lg">Food Orign ( Country )</span>
                            </label>
                            <input type="text" placeholder="Food Orign" name="country" defaultValue={country} className=" text-xs focus:outline-none focus:border-[2px] focus:border-[#5dff33]  input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text dancing font-bold text-lg">Food Description</span>
                        </label>
                        <textarea  className=' text-xs rounded-lg border-2 focus:outline-none p-4 focus:border-[2px] focus:border-[#5dff33]' name="description" defaultValue={description} id="" placeholder='Description...' cols="30" rows="5"></textarea>
                        </div>

                        <div className="form-control mt-6">
                        <button className="btn text-white py-2 px-5 bg-[#5dff33] capitalize hover:bg-black hover:text-white rounded-full"> Add Update Collection </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateFood;