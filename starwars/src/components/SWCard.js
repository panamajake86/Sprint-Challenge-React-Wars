import React from "react";
import { Card, CardText, CardBody, CardTitle, Col } from "reactstrap";
import Axios from "axios";

export default function SWCard(props) {


    const [speciesName, getSpeciesName] = React.useState();
    const [homeName, getHomeName] = React.useState();
    const [films, getFilms] = React.useState([]);
    const [ship, getShip] = React.useState([]);

    React.useEffect(() => {
        async function getSWCardInfo() {
            try {
                const species = await Axios.get(props.species);
                getSpeciesName(species.data.name)
                const home = await Axios.get(props.homeworld);
                getHomeName(home.data.name)
                const film = await Axios.get(props.films[0]);
                getFilms(film.data.title)
                const ships = await Axios.get(props.starships[0]);
                getShip(ships.data.name)

            } catch (err) {
                console.log(err);
            }
        }

        getSWCardInfo();
    }, [])



    return (
        <Col height="100%">
            <Card height="100%">
                <CardBody height="100%">
                    <CardTitle>{props.name}</CardTitle>
                    <CardText><p>{speciesName} from {homeName}</p></CardText>
                    <CardText>First appears in {films}</CardText>
                    <CardText>Pilots {ship}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
}