import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function WorkoutPlan() {
  return (
    <>
    <div className='backgroundColor'>
    
   
    <Form className='moduleContents formsBackground workoutPlan backgroundImages'> 
    <h1 className='moduleHeadings workoutPlanHeading'>WorkoutPlan</h1>
    <hr/>
      <Form.Group className="mb-3" controlId="formBasicEmail"  >
        <Form.Label>Day</Form.Label>
        <Form.Control type="text" placeholder="Enter the Day" />
        <Form.Text className="text-muted">    
        </Form.Text>
      </Form.Group>
      {/* Day,Workout,WorkoutDetails */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" />
      </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  );
}

export default WorkoutPlan;