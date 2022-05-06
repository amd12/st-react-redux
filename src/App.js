import './App.css';
import {useDispatch, useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import {addCustomerAction, deleteCustomerAction} from "./store/customerReducer";
import {addCashAction, deleteCashAction} from "./store/cashReducer";
import {fetchCustomers} from "./asyncAction/customers";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customer = useSelector(state => state.customer.customer);

    const addCash = (cash) => {
        dispatch(addCashAction(cash));
    }

    const removeCash = (cash) => {
        dispatch(deleteCashAction(cash));
    }

    const addCustomer = (name) => {
        const customer = {
            name: name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer));
    }

    const removeCustomer = (id) => {
        dispatch(deleteCustomerAction(id));
    }

    const updateCustomer = () => {
      return   fetchCustomers();
    }

    return (
        <Container className="p-3">
                <h1 className="header">Test Redux</h1>
                    <div className="card mx-auto">
                        <div className="card-body">
                            <center>
                                <h2>Cash</h2>
                                <h3>{cash}</h3>
                            </center>
                            <Row className="mx-0">
                            <Button as={Col} onClick={() => addCash(10)}>Add Cash</Button>
                            <Button as={Col} onClick={() => removeCash(10)} variant="secondary" className="mx-2">Remove Cash</Button>
                            </Row>
                        </div>
                    </div>


            <Row className="mx-0">
                <Button as={Col} onClick={() => addCustomer(String(prompt()))}>Add Customer</Button>
                <Button as={Col} onClick={() => removeCustomer(Number(prompt()))} variant="secondary" className="mx-2">Remove Customer</Button>
                <Button as={Col} onClick={() => dispatch( updateCustomer())} className="mx-2">Add Customer BD</Button>
            </Row>

                    <div style={{marginTop: "20px"}}></div>
                    <div style={{display: "flex"}}>
                        {console.log(customer)}
                        {customer.length > 0 ? customer.map(customer =>

                            <div key={customer.id} onClick={()=>removeCustomer(customer.id) } >{customer.name}</div>
                        ) : <div>No Customer</div>}
                    </div>
        </Container>
    );
}

export default App;
