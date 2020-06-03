import React from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Dropzone from 'react-dropzone';

const { Title } = Typography;
const { TextArea } = Input;

const PrivateOptions = [
    {value : 0, label:"Private"},
    {value : 1, label:"Public"}
]

const CategoryOptions = [
    { value: 0, label: "Film & Animation" },
    { value: 1, label: "Autos & Vehicles" },
    { value: 2, label: "Music" },
    { value: 3, label: "Pets & Animals" },
    { value: 4, label: "Sports" }
]
function VideoUploadPage() {

    //state만들기(각종 value들을 서버에 한방에 날리려)
    const [VideoTitle, setVideoTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Private, setPrivate] = useState(0)
    const [Category, setCategory] = useState("Film & Animation")

    const handleChangeTitle = (event) => {
        setTitle(event.currentTarget.value)
    }

    const handleChangeDescription = (event) => {
        console.log(event.currentTarget.value)

        setDescription(event.currentTarget.value)
    }

    const handleChangeOne = (event) => {
        setPrivacy(event.currentTarget.value)
    }

    const handleChangeTwo = (event) => {
        setCategories(event.currentTarget.value)
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2} > Upload Video</Title>
            </div>

            <Form onSubmit={onSubmit}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Drop zone */}
                    <Dropzone
                        onDrop={onDrop}
                        multiple={false}
                        maxSize={800000000}>
                        {({ getRootProps, getInputProps }) => (
                            <div style={{ width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                {...getRootProps()}
                            >
                                <input {...getInputProps()} />
                                <Icon type="plus" style={{ fontSize: '3rem' }} />

                            </div>
                        )}
                    </Dropzone>
                    {/* Thumbnail */}
                    <div>
                        <img src alt />
                    </div>
                </div>

            <br/>
            <br/>
            <label>Title</label>
            <Input 
                onChange={handleChangeTitle}
                value={VideoTitle}
            />

            <br/>
            <br/>
            <label>Description</label>
            <TextArea
                onChange={handleChangeDescription}
                value={Description}
            />
            <br/>
            <br/>
            <select onChange={handleChangeOne}>
                {PrivateOptions.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                ))}                
            </select>

            <br/>
            <br/>
            <select onChange={handleChangeTwo}>
                {CategoryOptions.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                ))}
                
            </select>

            <br/>
            <br/>
            <Button type="primary" size="large" onClick>
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default VideoUploadPage
