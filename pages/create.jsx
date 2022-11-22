import Head from "next/head";
import { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import { fetcher } from "../lib/apiService";
import { TRIVIA_API_URL } from "../lib/constants";
import styles from "../styles/pages/CreatePage.module.css";

export default function CreatePage() {
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState(new Set());

  async function getCategoryOptions() {
    let data = await fetcher(`${TRIVIA_API_URL}/categories`);
    // flatten category label from returned data structure
    let options = Object.values(data).reduce(
      (arr, subArr) => arr.concat(subArr),
      []
    );
    setCategoryOptions(options);
    setIsLoading(false);
  }

  useEffect(() => {
    getCategoryOptions();
  }, []);

  function onCategorySelect(category) {
    if (selectedCategories.has(category)) {
      selectedCategories.delete(category);
    } else {
      selectedCategories.add(category);
    }

    setSelectedCategories(new Set(selectedCategories));
  }

  function onSubmit(event) {
    event.preventDefault();

    console.log(selectedCategories);
  }

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1>Create a Game</h1>

        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="gameName">Game Name</label>
            <input
              type="text"
              name="gameName"
              id="gameName"
              required
              minLength={3}
              placeholder="Game A"
            />
          </div>
          <div>
            <fieldset>
              <legend>Select the Question Categories:</legend>
              {/* <div>
                <input
                  type="checkbox"
                  name="gameCategories"
                  id="categoryA"
                  value={"category"}
                />
                <label htmlFor="categoryA">Category Name</label>
              </div> */}
              {categoryOptions.map((category, idx) => {
                return (
                  <div key={idx}>
                    <input
                      type="checkbox"
                      name="gameCategories"
                      id={`${category}Option`}
                      value={category}
                      onChange={() => onCategorySelect(category)}
                    />
                    <label htmlFor={`${category}Option`}>
                      {category.replaceAll("_", " ")}
                    </label>
                  </div>
                );
              })}
            </fieldset>
          </div>
          <div>
            <button type="submit">Create</button>
          </div>
        </form>
      </section>
    </Layout>
  );
}