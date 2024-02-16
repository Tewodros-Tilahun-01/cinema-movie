import React from 'react'
import Card from '../components/Card';
import NotFound from '../components/NotFound';
function SearchPage(props) {
    const { movies } = props

    return (
        movies.length < 1 ? <NotFound /> :
            <>
                <section id="schedule" className='schedule'>
                    <div className="container-fluid">
                        <div className="row mt-5">
                            {movies && movies.length > 0 && movies.map((movie) => {
                                return <Card key={movie._id} movie={movie} />
                            })}
                        </div>
                    </div>
                </section>
            </>

    )
}

export default SearchPage