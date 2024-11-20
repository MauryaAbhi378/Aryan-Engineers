import HNipple from "./assets/hex-nipple.jpg";
import LNipple from "./assets/hex-long-nipple.jpg";
import MTee from "./assets/male-tee.jpg"
import MRTee from "./assets/male-run-tee.jpg"
import MBTee from "./assets/male-branch-tee.jpg"
import FTee from "./assets/female-tee.jpg"
import MElbow from "./assets/male-elbow.jpg"
import mElbow from "./assets/45°-male-elbow.jpg"
import fElbow from "./assets/90°-female-elbow.jpg"
import SElbow from "./assets/90°-street-elbow.jpg"
import sElbow from "./assets/45°-street-elbow.jpg"
import FCross from "./assets/female-cross.jpg"
import FCoupling from "./assets/full-coupling.jpg"
import PUnion from "./assets/pipe-union-3PC.jpg"
import MAdaptor from "./assets/Male-Adaptor.jpg"
import FAdaptor from "./assets/female-adaptor.jpg"
import HMAdaptor from "./assets/hose-male-adaptor.jpg"
import HFAdaptor from "./assets/hose-female-adaptor.jpg"
import HMElbow from "./assets/hose-male-elbow.jpg"
import MConnector from "./assets/male-connector.jpg"
import FConnector from "./assets/female-connector.jpg"
import BMConnector from "./assets/bulkhead-male-connector.jpg"
import BFConnector from "./assets/bulkhead-female-connector.jpg"
import EUnion from "./assets/equal-union.jpg"
import UEUnion from "./assets/unequal-union.jpg"
import BUnion from "./assets/bulkhead-union.jpg"
import EUCross from "./assets/equal-union-cross.jpg"
import MElbowOD from "./assets/male-elbowOD.jpg"
import UElbow from "./assets/union-elbow.jpg"
import BUElbow from "./assets/bulkhead-union-elbow.jpg"
// import MElbowD from "./assets/45°-male-elbow.jpg"
import MElbowD from "./assets/45°-female-elbowOD.jpg"
import UElbowD from "./assets/45°-union-elbow.jpg"
import ETee from "./assets/equal-tee.jpg"
import UETee from "./assets/unequal-tee.jpg"
import MBTeeOD from "./assets/male-branch-teeOD.jpg" 
import FBTee from "./assets/female-branch-tee.jpg"
import MRTeeOD from "./assets/male-run-tee.jpg"
import FRTee from "./assets/female-run-tee.jpg"
import MAdaptorT from "./assets/male-adaptortube.jpg"
import FAdaptorT from "./assets/female-adaptortube.jpg"
import SF from "./assets/single-ferrule.jpg"
import MConnectorf from "./assets/male-connectorf.jpg"
import Fconnectorf from "./assets/female-connectorf.jpg"
import Union from "./assets/unionf.jpg"
import BUnionf from "./assets/bulkhead-unionf.jpg"
import MElbowf from "./assets/male-elbowf.jpg"
import FElbowf from "./assets/female-elbowf.jpg"
import UElbowf from "./assets/union-elbowf.jpg"
import AMElbow from "./assets/adjustable-male-elbow.jpg"
import MBTeef from "./assets/male-branch-teef.jpg"
import FRTeef from "./assets/female-run-teef.jpg"
import FBteef from "./assets/female-branch-teef.jpg"
import UCrossf from "./assets/union-crossf.jpg"

const products = [
  {
    id: "P001",
    name: "Male Tee",
    img: MTee,
    category: " Pipe Fittings",
  },
  {
    id: "P002",
    name: "Male Run Tee",
    img: MRTee,
    category: " Pipe Fittings",
  },
  {
    id: "P003",
    name: "Hex nipple",
    img: HNipple,
    category: " Pipe Fittings",
  },
  {
    id: "P004",
    name: "Hex long Nipple",
    img: LNipple,
    category: " Pipe Fittings",
  },
  {
    id: "P005",
    name: "Male Branch Tee",
    img: MBTee,
    category: " Pipe Fittings",
  },
  {
    id: "P006",
    name: "Female Tee",
    img: FTee,
    category: " Pipe Fittings",
  },
  {
    id: "P007",
    name: "Male Elbow",
    img: MElbow,
    category: " Pipe Fittings",
  },
  {
    id: "P008",
    name: "45° Male Elbow",
    img: mElbow,
    category: " Pipe Fittings",
  },
  {
    id: "P009",
    name: "90° Female Elbow",
    img: fElbow,
    category: " Pipe Fittings",
  },
  {
    id: "P010",
    name: "90° Street Elbow",
    img: SElbow,
    category: " Pipe Fittings",
  },
  {
    id: "P011",
    name: "45° Street Elbow",
    img: sElbow,
    category: " Pipe Fittings",
  },
  {
    id: "P012",
    name: "Female Cross",
    img: FCross,
    category: " Pipe Fittings",
  },
  {
    id: "P013",
    name: "Full Coupling",
    img: FCoupling,
    category: " Pipe Fittings",
  },
  {
    id: "P014",
    name: "Pipe Union 3PC",
    img: PUnion,
    category: " Pipe Fittings",
  },
  {
    id: "P015",
    name: "Male Adaptor",
    img: MAdaptor,
    category: " Pipe Fittings",
  },
  {
    id: "P016",
    name: "Female Adaptor",
    img: FAdaptor,
    category: " Pipe Fittings",
  },
  {
    id: "P017",
    name: "Hose Male Adaptor",
    img: HMAdaptor,
    category: " Pipe Fittings",
  },
  {
    id: "P018",
    name: "Hose Female Adaptor",
    img: HFAdaptor,
    category: " Pipe Fittings",
  },
  {
    id: "P019",
    name: "Hose Male Elbow",
    img: HMElbow,
    category: " Pipe Fittings",
  },
  {
    id: "P020",
    name: "Male Connector",
    img: MConnector,
    category: "Tube Fittings"
  },
  {
    id: "P021",
    name: "Female Connector",
    img: FConnector,
    category: "Tube Fittings"
  },
  {
    id: "P022",
    name: "Bulkhead Male Connector",
    img: BMConnector,
    category: "Tube Fittings"
  },
  {
    id: "P023",
    name: "Bulkhead Female Connector",
    img: BFConnector,
    category: "Tube Fittings"
  },
  {
    id: "P024",
    name: "Equal Union",
    img: EUnion,
    category: "Tube Fittings"
  },
  {
    id: "P025",
    name: "Un Equal Union",
    img: UEUnion,
    category: "Tube Fittings"
  },
  {
    id: "P026",
    name: "Bulkhead Union",
    img: BUnion,
    category: "Tube Fittings"
  },
  {
    id: "P027",
    name: "Equal Union Cross",
    img: EUCross,
    category: "Tube Fittings"
  },
  {
    id: "P028",
    name: "Male Elbow",
    img: MElbowOD,
    category: "Tube Fittings"
  },
  {
    id: "P029",
    name: "Union Elbow",
    img: UElbow,
    category: "Tube Fittings"
  },
  {
    id: "P030",
    name: "Bulkhead Union Elbow",
    img: BUElbow,
    category: "Tube Fittings"
  },
  {
    id: "P031",
    name: "45° Male Elbow",
    img: MElbowD,
    category: "Tube Fittings"
  },
  {
    id: "P032",
    name: "45° Union Elbow",
    img: UElbowD,
    category: "Tube Fittings"
  },
  {
    id: "P033",
    name: "Equal Tee",
    img: ETee,
    category: "Tube Fittings"
  },
  {
    id: "P034",
    name: "Un Equal Tee",
    img: UETee,
    category: "Tube Fittings"
  },
  {
    id: "P035",
    name: "Male Branch Tee",
    img: MBTee,
    category: "Tube Fittings"
  },
  {
    id: "P036",
    name: "Female Branch Tee",
    img: FBTee,
    category: "Tube Fittings"
  },
  {
    id: "P037",
    name: "Male Run Tee",
    img: MRTee,
    category: "Tube Fittings"
  },
  {
    id: "P038",
    name: "Female Run Tee",
    img: FRTee,
    category: "Tube Fittings"
  },
  {
    id: "P039",
    name: "Male Adaptor",
    img: MAdaptorT,
    category: "Tube Fittings"
  },
  {
    id: "P040",
    name: "Female Adaptor",
    img: FAdaptorT,
    category: "Tube Fittings"
  },
  {
    id: "P041",
    name: "Male Branch Tee",
    img: MBTeeOD,
    category: "Tube Fittings"
  },
  {
    id: "P042",
    name: "Single Ferrule",
    img: SF,
    category: "Tube Fittings"
  },
  {
    id: "P043",
    name: "Male Connector",
    img: MConnectorf,
    category: "Flare End Fittings"
  },
  {
    id: "P044",
    name: "Female Connector",
    img: Fconnectorf,
    category: "Flare End Fittings"
  },
  {
    id: "P045",
    name: "Union",
    img: Union,
    category: "Flare End Fittings"
  },
  {
    id: "P046",
    name: "Bulkhead Union",
    img: BUnionf,
    category: "Flare End Fittings"
  },
  {
    id: "P047",
    name: "Male Elbow",
    img: MElbowf,
    category: "Flare End Fittings"
  },
  {
    id: "P048",
    name: "Female Elbow",
    img: FElbowf,
    category: "Flare End Fittings"
  },
  {
    id: "P049",
    name: "Union Elbow",
    img: UElbowf,
    category: "Flare End Fittings"
  },
  {
    id: "P050",
    name: "Adjustable Male Elbow",
    img: AMElbow,
    category: "Flare End Fittings"
  },
  {
    id: "P051",
    name: "Male Branch Tee",
    img: MBTeef,
    category: "Flare End Fittings"
  },
  {
    id: "P052",
    name: "Female Branch Tee",
    img: FBteef,
    category: "Flare End Fittings"
  },
  {
    id: "P053",
    name: "Female Run Tee",
    img: FRTeef,
    category: "Flare End Fittings"
  },
  {
    id: "P054",
    name: "Union Cross",
    img: UCrossf,
    category: "Flare End Fittings"
  },
];

export default products;
