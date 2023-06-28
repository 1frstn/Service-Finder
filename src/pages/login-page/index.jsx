import { Form,Col, Button } from "react-bootstrap"
import useApi from "../../hooks/useApi";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const api = useApi();
  const dispatch =useDispatch();
  return (
    <>
    <div className="container">
         <div className="row">
            <div className="col-lg-12">
              <div className="page-content">
                <div className="main-banner">
                    <div className="row justify-content-center">
                      <div className="col-lg-7">
                          <div className="header-text">
                           <form onSubmit={ async (e) => {
                                        e.preventDefault();
                                        
                                        const formData = new FormData(e.currentTarget);
                                        const formJson = Object.fromEntries(
                                          formData.entries()
                                          );
                                        console.log(">>>FORM_JSON",formJson);
                                        const authRes = await api.post("auth/login",formJson);
                                        console.log(">>AUTH__RES",authRes);

                                      }} >
                             <h6>Login Form</h6>
                             <Form.Group  className="mb-3" controlId="formBasicEmail">
                              <Form.Label className="text-white" >
                                Email Address
                              </Form.Label>
                              <Form.Control 
                                   type="email" 
                                   placeholder="Enter Email"
                                   name="email" />
                               <Form.Text className="text-muted">
                                  We'll never share your email with anyone else.
                                </Form.Text>    
                               </Form.Group>

                               <Form.Group  className="mb-3" controlId="formBasicPassword">
                               <Form.Label className="text-white">
                                Password
                              </Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" />
                              </Form.Group>
                            <Button 
                                variant="primary" 
                                type="submit"
                                >
                              Submit
                            </Button>
                           </form> 
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </>
  )
}
