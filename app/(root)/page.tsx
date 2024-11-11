import AnimeCard, { AnimeCardType } from "@/components/AnimeCard";
import SearchForm from "@/components/SearchForm";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { ANIME_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const params = { search: query || null };

  const { data: posts } = await sanityFetch({ query: ANIME_QUERY, params });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Post Anime Reviews and Grow the Community</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Reviews, Comment on Reviews, and Become the Top Reviewers of
          the Month
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Animes"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: AnimeCardType) => (
              <AnimeCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No animes found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
