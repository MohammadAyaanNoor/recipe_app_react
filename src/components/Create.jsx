import React, { useContext, useState } from 'react'
import { recipecontext } from '../contexts/RecipeContext'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { asyncadd } from '../store/actions/recipeAction'



const Create = () => {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //   } = useForm();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [imageURL, setimageURL] = useState("")
    const [recipename, setrecipename] = useState("kjhkjhkh")
    const [description, setdescription] = useState("")
    const [ingredients, setingredients] = useState("");
    const [instructions, setinstructions] = useState("");
    const submitHandler = (e)=>{
        e.preventDefault()
        const newrecipe = {
            id:nanoid(),
            imageURL,
            recipename,
            description,
            ingredients,
            instructions
        }
       dispatch(asyncadd(newrecipe))
        toast.success("recipe created successfully!!!")
        navigate('/recipes')
    }

    


  return (
    <div className='h-screen w-full bg-zinc-200 p-20'>
        <h1 className='text-2xl text-black font-bold'>Fill the details <br /> to create a new recipe</h1>
        <form onSubmit={submitHandler} className=' mt-6 flex flex-col gap-5'>
            <input onChange={(e)=>setimageURL(e.target.value)}  value={imageURL} type="text" placeholder="Recipe IMG Url" className="input input-bordered bg-slate-50 w-full max-w-xs" />
            {/* {errors.imageURL && <p className='text-red-500 text-xl'>image url is required</p>} */}
            <input onChange={(e)=>setrecipename(e.target.value)}  value={recipename} type="text" placeholder="Recipe name" className="input input-bordered bg-slate-50 w-full max-w-xs" />
            {/* {errors.imageURL && <p className='text-red-500 text-xl'>recipe name is required</p>} */}
            <textarea onChange={(e)=>setdescription(e.target.value)}  value={description} className="textarea textarea-bordered bg-slate-50 " placeholder="Recipe Description"></textarea>
            {/* // {errors.imageURL && <p className='text-red-500 text-xl'>description is required</p>} */}
            <textarea onChange={(e)=>setingredients(e.target.value)}  value={ingredients} className="textarea textarea-bordered bg-slate-50 " placeholder="recipe ingredients -> 'use comma to seperate ingredients...'"></textarea>
            {/* // {errors.imageURL && <p className='text-red-500 text-xl'>ingrediants is required</p>} */}
            <textarea onChange={(e)=>setinstructions(e.target.value)}  value={instructions} className="textarea textarea-bordered bg-slate-50 " placeholder="recipe instructions -> 'use comma to seperate instructions...'"></textarea>
            {/* {errors.imageURL && <p className='text-red-500 text-xl'>instructions is required</p>} */}
            <div className="w-full text-center">
                <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>

    </div>
  )
}

export default Create