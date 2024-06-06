import {
  Box,
  Button,
  Container,
  FormLabel,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Sidebar from '../Sidebar.jsx';

export default function CreateCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [image, setImage] = useState(null);
  const [imagePrev, setImagePrev] = useState(null);

  const categories = ['Development', 'Business', 'Software', 'Marketing'];

  console.log(image);

  function handleChangeImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  }

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Container>
        <form>
          <Heading py={4} textAlign={['center', 'left']}>
            Create Course
          </Heading>

          {imagePrev && (
            <Image mb={2} boxShadow={'lg'} borderRadius={'10px'} src={imagePrev} boxSize={150} objectFit={'cover'} />
          )}
          <VStack spacing={2}>
            <Box w={'full'}>
              <FormLabel htmlFor="title" textAlign={'left'}>
                Title
              </FormLabel>
              <Input
                id="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                focusBorderColor="blue.500"
              />
            </Box>
            <Box w={'full'}>
              <FormLabel htmlFor="description" textAlign={'left'}>
                Description
              </FormLabel>
              <Input
                id="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                focusBorderColor="blue.500"
              />
            </Box>
            <Box w={'full'}>
              <FormLabel htmlFor="createdBy" textAlign={'left'}>
                Creater Name
              </FormLabel>
              <Input
                id="createdBy"
                value={createdBy}
                onChange={e => setCreatedBy(e.target.value)}
                focusBorderColor="blue.500"
              />
            </Box>
            <Box width={'full'}>
              <FormLabel htmlFor="category" textAlign={'left'}>
                Category
              </FormLabel>
              <Select
                placeholder="Select Category"
                focusBorderColor="blue.500"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                {categories.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </Box>

            <Box width={'full'} my={2}>
              <FormLabel htmlFor="uploadposter">Upload Poster</FormLabel>
              <Input
               className='sign-up-upload-avatar'
                required
                id="uploadposter"
                accept="image/*"
                type="file"
                focusBorderColor="blue.500"
                onChange={handleChangeImage}
              />
            </Box>

            <Button width={'full'} type='submit' >Submit</Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
}
