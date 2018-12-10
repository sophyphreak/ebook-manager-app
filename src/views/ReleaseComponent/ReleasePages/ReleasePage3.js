import React from 'react';
import { Card, CardHeader, CardBody, Button, Form } from 'reactstrap';

import Website from '../../FormElements/Website';
import Keywords from '../../FormElements/Keywords';
import ReleaseText from '../../FormElements/ReleaseText';

const ReleasePage3 = ({
  error,
  onBack,
  onSubmit,

  website,
  onWebsiteChange,

  keywords,
  onKeywordsChange,

  releaseText,
  onReleaseTextChange
}) => (
  <Card className="animated fadeIn">
    <CardHeader>
      <h4>
        <strong>Press Release - 3 of 3</strong>
      </h4>
    </CardHeader>
    <CardBody>
      <Form onSubmit={onSubmit}>
        <Website
          label="Website"
          website={website}
          onWebsiteChange={onWebsiteChange}
          hasError={!!error.message}
          errorMessage={error.website}
        />
        <Keywords
          label="Keywords"
          keywords={keywords}
          onKeywordsChange={onKeywordsChange}
          hasError={!!error.message}
          errorMessage={error.keywords}
        />
        <ReleaseText
          label="Press Release*"
          releaseText={releaseText}
          onReleaseTextChange={onReleaseTextChange}
          hasError={!!error.message}
          errorMessage={error.releaseText}
        />
        {error.message && <p>{error.message}</p>}
        <Button onClick={onBack} size="sm" color="basic">
          Go Back
        </Button>
        <Button type="submit" size="sm" color="primary" value="Submit">
          Submit
        </Button>
      </Form>
    </CardBody>
  </Card>
);

export default ReleasePage3;
