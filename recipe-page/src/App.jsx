import imageMenu from "/images/image-omelette.jpeg"


export default function App() {
  return (
    <main className="min-h-screen flex justify-center  bg-Eggshell">
      <section className="flex flex-col sm:max-w-xl p-2 sm:p-8 bg-Rose-White sm:mt-20 rounded-lg">
        <img src={imageMenu} alt="" className="rounded-md sm:my-2" />
        <h1 className="font-bold text-xl my-2">Simple Omelette Recipe</h1>
        <p className="text-gray-500 ">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
          to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>

        <div className="p-4 my-2">
          <h3 className="text-rose-700 my-2 "> Preparation time</h3>
          <ul className="text-gray-500">
            <li><span className="text-DarkCharcoal">Total</span>: Approximately 10 minutes</li>
            <li><span className="text-DarkCharcoal">Preparation</span>: 5 minutes</li>
            <li><span className="text-DarkCharcoal">Cooking</span>: 5 minutes</li>
          </ul>
        </div>

        <div>
          <h2 className="text-rose-700 my-2 ">Ingredients</h2>
          <ul className="text-gray-500">
            <li> 2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </div>

        <div className="my-4">
          <h2 className="text-rose-700 my-2 ">Instructions</h2>
          <ol type="1" className="text-gray-500">
            <li><span className="text-DarkCharcoal">Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
              You can add a tablespoon of water or milk for a fluffier texture.</li>
            <li><span className="text-DarkCharcoal">Heat the pan</span>: Place a non-stick frying pan over medium heat and add butter or oil.</li>
            <li><span className="text-DarkCharcoal">Cook the omelette</span>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
              the eggs evenly coat the surface.</li>
            <li><span className="text-DarkCharcoal">Add fillings (optional)</span>: When the eggs begin to set at the edges but are still slightly runny in the
              middle, sprinkle your chosen fillings over one half of the omelette.</li>
            <li><span className="text-DarkCharcoal">Fold and serve</span> : As the omelette continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a plate.
            </li>
            <li><span className="text-DarkCharcoal">Enjoy</span>: Serve hot, with additional salt and pepper if needed.</li>
          </ol>
        </div>

        <div className="text-gray-500">
          <h2 className="text-rose-700 my-2">Nutrition</h2>
          <p>  The table below shows nutritional values per serving without the additional fillings.
          </p>
          <div className="flex justify-center gap-24 my-2">
            <span>
              <p>Calories</p>
              <p>Carbs</p>
              <p> Protein</p>
              <p>Fat</p>
            </span>
            <span className="text-rose-400">
              <p> 277kcal</p>
              <p>0g</p>
              <p>20g</p>
              <p>22g</p>
            </span>
          </div>
        </div>


      </section>

    </main>
  )
}