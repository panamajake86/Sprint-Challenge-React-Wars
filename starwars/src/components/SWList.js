import React from "react";
import { Container, Row } from "reactstrap";
import axios from "axios";
import SWCard from "./SWCard";

export default function SWList() {
    const [wars, setWars] = React.useState([]);

    React.useEffect(()=>{
        async function fetchData(){
            try {
                const starList = await axios.get("https://swapi.co/api/people/");
                setWars(starList.data.results);
            } catch(err) {
                console.log(err);
            }
        }

        fetchData();

    }, []);

    return (
        <Container>
            <Row>
                <div className="starWars">
                    {wars.map((e, i) => {
                        return (<SWCard 
                        name = {e.name}
                        species = {e.species}
                        homeworld = {e.homeworld}
                        films = {e.films}
                        starships = {e.starships}
                        vehicles = {e.vehicles}
                        key = {i}
                        />)
                    })}
                    </div>
            </Row>
        </Container>
    );
}