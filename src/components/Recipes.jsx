import Card from './Card';
import { useLocation } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import recipeReducer from '../store/reducers/recipeReducer';

const Recipes = () => {
  const {pathname}=useLocation()
  const {recipes} = useSelector((state)=>state.recipeReducer)
  


  return (
    <div className='bg-zinc-200'>
       <h1 className="text-center text-2xl font-semibold text-black">OUR RECIPES</h1>
            <p className="text-center text-black-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                aperiam?
            </p>
            {pathname == '/recipes'&& (
               <a href="/create">
               <button className='btn bg-green-500 ml-10 mt-5 px-7 hover:bg-green-600  text-white'>Create Recipe</button>
               </a>
            )}
           
            <div className="recipe-cards mt-[5%]  flex flex-wrap p-5">
                { recipes && recipes.length > 0 ? (
                    recipes.map((r) => <Card key={r.id} recipe={r} />)
                ) : (
                    <h1 className="w-full text-green-600 text-3xl font-extrabold text-center mt-10">
                        No Recipe Found
                    </h1>
                )}
            </div>
            
    </div>
  )
}

export default Recipes