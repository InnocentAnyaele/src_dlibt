import React,  {useState} from 'react'
import {Form, Button, ProgressBar} from 'react-bootstrap'
import './Application.css'
import axios from 'axios'
import {storage} from '../../../firebase/firebase'

function ApplicationForm () {

    const [department, setDepartment] = useState('')
    const [ID, setID] = useState('')
    const [name, setName] = useState('')
    // const [department, setDepartment] = useState([{label: "Information Technology", value: "Information Technology"},{label: "Computer Science", value: "Computer Science"},{label: "Business", value: "Business"}])
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [position, setPosition] = useState('')
    const [reference, setReference] = useState('')
    const [message, setMessage] = useState('')
    const [file, setFile] = useState('')
    const [fileName, setFileName] = useState('')
    // const [uploadPercentage, setUploadPercentage] = useState(0)
    const [progress, setProgress] = useState('')

    // const changeDepartmentHandler = e => {
    //     setDepartment(e.target.value)
    //     console.log(department)
    // }

    // const changePositionHandler = e => {
    //     setPosition(e.target.value)
    //     console.log(position)
    // }

    const changeFileHandler = e => {
        setFile(e.target.files[0])
        setFileName(Date.now() + e.target.files[0].name)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('ID', ID)
        formData.append('name', name)
        formData.append('department', department)
        formData.append('position', position)
        formData.append('reference', reference)
        formData.append('file', file)
        formData.append('contact', contact)
        formData.append('email', email)
        formData.append('fileName', fileName)

        const insert = async () => {

            const uploadTask = storage.ref(`/application/${fileName}`).put(file)
            uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                setProgress(progress)
            }, (error) => {
                console.log(error)
            }, async (complete) => {
                try {
                    const url = await storage.ref('application').child(fileName).getDownloadURL()
                    formData.append('url', url)
                    const res = await axios.post ('/application/addApplication', formData, {
                        headers : {
                            'Content-Type': 'multipart/form-data'
                        },
                        onUploadProgress: progressEvent => {
                            // setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)))
                            // console.log(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)))
                            if ((parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))) === 100){
                                setMessage('Application submitted')
                            }
                        }
                    })
    
                    // if(uploadPercentage === 100) {
                    //     setMessage('Application submitted!')
                    // }
                    console.log(res.data)
                } catch (err) {
                    if(err.response.status === 500) {
                        setMessage('There was a problem with the server')
                    } else if (err.response.status === 400) {
                        setMessage('Application failed, try again')
                    }
                    else {
                        setMessage(err.response.data.msg)
                    }
                }
            })
        }

        if (file.length < 1) {
            insert()
        }
        else {
            if (file.type.split('/')[0] === 'image') {
                insert ()
        } 
        else {
            setMessage('Please upload an image')
        }
        }
    }

    return (
        <div>
            <Form className="application-form" onSubmit={submitHandler}>

                <Form.Group controlID="">
                    <Form.Control type="text" placeholder="ID" name="ID" value={ID} onChange={e => setID(e.target.value)} required/>
                </Form.Group>

                <Form.Group controlID="">
                    <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={e => setName(e.target.value)} required/>
                </Form.Group>

                <Form.Group controlID="">
                    <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                </Form.Group>

                <Form.Group controlID="">
                    <Form.Control type="text" placeholder="Contact" name="contact" value={contact} onChange={e => setContact(e.target.value)} required/>
                </Form.Group>

                <Form.Group controlID="">
                    <Form.Control type="text" placeholder="Name of reference" name="reference" value={reference} onChange={e => setReference(e.target.value)} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Passport Photo</Form.Label>
                    <Form.File id="" type='file' onChange={changeFileHandler} accept="image/*" required/>
                </Form.Group>

                <Form.Group controlId = "">
                    <Form.Label>Department</Form.Label>
                    {/* <Form.Control value={department} name="department" onChange={changeDepartmentHandler} as="select" custom> */}
                    <Form.Control value={department} name="department" onChange={e => setDepartment(e.target.value)} as="select" custom>
                        <option value=''></option>
                        <option value='Information Technology'>Information Technology</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Business">Business</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId = "">
                    <Form.Label>Position</Form.Label>
                    {/* <Form.Control value={position} name="position" onChange={changePositionHandler} as="select" custom> */}
                    <Form.Control value={position} name="position" onChange={e => setPosition(e.target.value)} as="select" custom>
                        <option value=''></option>
                        <option value='SRC president'>SRC president</option>
                        <option value="SRC vice president">SRC Vice President</option>
                        <option value="Vice Commissioner">Vice Commisioner</option>
                        <option value="Women Commissioner">Women Commissioner</option>
                        <option value="Financial Secretary">Financial Secretary</option>
                        <option value="General Secretary">General Secretary</option>
                        <option value="Social Secretary">Social Secretary</option>
                        <option value="Local NUGS/USAG/PUSAG Rep">Local NUGS/USAG/PUSAG Rep</option>
                    </Form.Control>
                </Form.Group>

                <p style={{color: 'red'}} ><i>{message}</i></p>

                <div className='mb-3'>
                    <ProgressBar striped variant="success" now={progress} label={`${progress}%`} />
                </div>

                <Button variant="primary" type="submit">Submit</Button>

            </Form>
        </div>
    )

}

export default ApplicationForm