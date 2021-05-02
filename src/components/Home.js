import React  from 'react'
import CarouselBox from "./CarouselBox";
import {Button, Card, CardDeck, Container} from "react-bootstrap";


function Home(props) {


    return (
        <div >
        <CarouselBox/>
        <Container>
            <h2 className="text-center m-4">Our team</h2>
            <CardDeck className="m-4">
                <Card className="text-center" border="primary">
                    <Card.Img
                    variant="top"
                        src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
/>
<Card.Body>
    <Card.Title>
Devlopers
    </Card.Title>
    <Card.Text>A programmer is a specialist engaged in programming, that is, the creation of computer programs.
    </Card.Text>
    <Button variant="primary">About Team</Button>
</Card.Body>
                </Card>

                <Card className="text-center" border="primary" >
                    <Card.Img
                        variant="top"
                        src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                    <Card.Body>
                        <Card.Title>Desingers
                        </Card.Title>
                        <Card.Text>
                            More formally, a designer is an agent that "specifies the structural properties of a design object"
                        </Card.Text>
                        <Button variant="primary">About Team</Button>
                    </Card.Body>
                </Card>

                <Card className="text-center" border="primary">
                    <Card.Img
                        variant="top"
                        src="https://images.pexels.com/photos/7413924/pexels-photo-7413924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                    <Card.Body>
                        <Card.Title>
                            Investors
                        </Card.Title>
                        <Card.Text>What Is an Investor? An investor is any person or other entity (such as a firm or mutual fund) .
                        </Card.Text>
                        <Button variant="primary">About Team</Button>
                    </Card.Body>
                </Card>

            </CardDeck>
        </Container>
          </div>
    )
}

export default Home;