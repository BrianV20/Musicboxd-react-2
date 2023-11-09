import { React } from "react";
import { useFetch } from "../useFetch";
import { Card, Title, Text, Grid, Col } from "@tremor/react";
import { NavBar } from "./nav-bar";

import '../../public/css/index.css';
export const Index = () => {

  return (
    <NavBar />
//     <main>
//     <Title>Dashboard</Title>
//     <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

//     <Grid numItemsLg={6} className="gap-6 mt-6 card">
//       <Text>pruea</Text>
//       <Col numColSpanLg={4}>
//         <Card className="h-full card">
//           <div className="h-60" />
//           <Text>pruea 2</Text>
//         </Card>
//       </Col>

//       <Col numColSpanLg={2}>
//         <div className="space-y-6">
//           <Card className="card">
//             <div className="h-24" />
//             <Text>pruea 3</Text>
//           </Card>
//           <Card>
//             <div className="h-24" />
//             <Text>pruea 4</Text>
//           </Card>
//           <Card>
//             <div className="h-24" />
//             <Text>pruea 5</Text>
//           </Card>
//         </div>
//       </Col>
//     </Grid>
//   </main>

  );
};
