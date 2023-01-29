import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ai from '../assests/chip.png'
import '../components/css/card.css'
function Cards(props) {
  return (
    <Card style={{ width: '18rem',marginLeft:'10px',padding:'10px',marginBottom:'10px',borderRadius:10, }}>
      <Card.Body>
      <Card.Img variant="top" src={props.icon}  style={{height:'18rem',width:'18rem'}} className="rotate"/>
      </Card.Body>
    </Card>
  );
}

export default Cards;