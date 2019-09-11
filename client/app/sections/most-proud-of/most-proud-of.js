//====================================================|
// MOST PROUD OF


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './most-proud-of.scss';

// Atoms
import Heading from '../../components/atoms/heading';
import Text from '../../components/atoms/text';

// Organisms
import Section from '../../components/organisms/section';
import SectionItem from '../../components/organisms/section/section-item';


//--------------------------| Component

const MostProudOf = ({ data }) => (
  <Section
    className={styles.root}
    name={data.fields.name}
  >
    {
      data.fields.items.map(item => (
        <SectionItem key={item.sys.id}>
          <Heading size={3} type={'item'}>{item.fields.title}</Heading>
          {
            item.fields.description && (
              <Text>
                <p className={styles.description}>{item.fields.description}</p>
              </Text>
            )
          }
        </SectionItem>
      ))
    }
  </Section>
);


//--------------------------| Export

export default MostProudOf;
