import React, { useState } from 'react'

const Create = () => {
    const [imageURL, setimageURL] = useState("")
    const [recipename, setrecipename] = useState("")
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
        
    }

  return (
    <div className='h-[90vh] w-full bg-zinc-200 p-20'>
        <h1 className='text-2xl text-black font-bold'>Fill the details <br /> to create a new recipe</h1>
        <form onSubmit={submitHandler} className=' mt-6 flex flex-col gap-5'>
            <input onChange={(e)=>setimageURL(e.target.value)} value={imageURL} type="text" placeholder="Recipe IMG Url" className="input input-bordered bg-slate-50 w-full max-w-xs" />
            <input onChange={(e)=>setrecipename(e.target.value)} value={recipename} type="text" placeholder="Recipe name" className="input input-bordered bg-slate-50 w-full max-w-xs" />
            <textarea onChange={(e)=>setdescription(e.target.value)} value={description} className="textarea textarea-bordered bg-slate-50 " placeholder="Recipe Description"></textarea>
            <textarea onChange={(e)=>setingredients(e.target.value)} value={ingredients} className="textarea textarea-bordered bg-slate-50 " placeholder="recipe ingredients -> 'use comma to seperate ingredients...'"></textarea>
            <textarea onChange={(e)=>setinstructions(e.target.value)} value={instructions} className="textarea textarea-bordered bg-slate-50 " placeholder="recipe instructions -> 'use comma to seperate instructions...'"></textarea>
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