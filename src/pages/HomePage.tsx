import { useState } from 'react';

import {
  Button,
  CheckboxGroup,
  ComboboxField,
  Form,
  Island,
  NumberField,
  Pagination,
  PlaceholderImage,
  TextField,
} from '~/components/index.ts';
import useAppStore from '~/stores/appStore.ts';

function HomePage() {
  const [formValues, setFormValues] = useState<any>();
  const setTheme = useAppStore((state) => state.setTheme);

  return (
    <>
      <div className="m-8 space-y-12">
        <Pagination totalPages={12} />
        <PlaceholderImage className="w-36 h-48" />
        <Island className="size-48 grid place-content-center" />
        {/* <Backdrop open={true}>
        <></>
      </Backdrop> */}
        <div className="space-x-2">
          <Button onClick={() => setTheme('light')}>Light</Button>
          <Button onClick={() => setTheme('dark')} variant="outlined">
            Dark
          </Button>
          <Button onClick={() => setTheme('system')} variant="content">
            System
          </Button>
        </div>
        <div>
          <Form
            onSubmit={setFormValues}
            initialValues={{ age: 0, name: 'john', cart: [], category: [] }}
          >
            <NumberField label="Age" name="age" unit="cm" required />
            <TextField label="Name" name="name" required />
            <CheckboxGroup
              required
              label="Cart"
              name="cart"
              options={[
                { value: 'melon', label: 'Melon' },
                { value: 'pumpkin', label: 'Pumpkin' },
                { value: 'orange', label: 'Orange' },
              ]}
            />
            <ComboboxField
              label="Category"
              name="category"
              options={[
                { value: 'fruit', label: 'Fruit' },
                { value: 'vegetable', label: 'Vegetable' },
                { value: 'meat', label: 'Meat' },
                {
                  value: 'test',
                  label:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum ab magni nostrum perspiciatis veritatis? Consequuntur iusto culpa asperiores nihil totam aliquam harum nobis, similique veniam doloremque commodi minus dolores!',
                },
              ]}
            />
            <Button type="submit">Submit</Button>
          </Form>
          <pre>{JSON.stringify(formValues, null, 2)}</pre>
        </div>
      </div>
    </>
  );
}

export default HomePage;
