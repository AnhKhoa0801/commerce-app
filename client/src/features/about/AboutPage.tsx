import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import {
  useLazyGet400ErrorQuery,
  useLazyGet401ErrorQuery,
  useLazyGet404ErrorQuery,
  useLazyGet500ErrorQuery,
  useLazyGetValidationErrorQuery,
} from "./errorApi";

export default function AboutPage() {
  const [get400Error] = useLazyGet400ErrorQuery();
  const [get404Error] = useLazyGet404ErrorQuery();
  const [get401Error] = useLazyGet401ErrorQuery();
  const [get500Error] = useLazyGet500ErrorQuery();
  const [getValidationError] = useLazyGetValidationErrorQuery();
  return (
    <Container>
      <Typography gutterBottom variant="h2">
        Error Testing
      </Typography>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          color="primary"
          onClick={() => get400Error()}
        >
          400 Error
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => get404Error()}
        >
          404 Error
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => get401Error()}
        >
          401 Error
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => getValidationError()}
        >
          Validation Error
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => get500Error()}
        >
          500 Error
        </Button>
      </ButtonGroup>
    </Container>
  );
}
