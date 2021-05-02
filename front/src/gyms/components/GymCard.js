/* External */
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";

/* Internal */
import { GymCardContainer } from "./GymCardContainer";
import { GymCardMedia } from "./GymCardMedia";
import { GymCardContent } from "./GymCardContent";
import { GymCardTitleContainer } from "./GymCardTitleContainer";
import { GymCardSubTitleContainer } from "./GymCardSubTitleContainer";
import { GymCardActionsContainer } from "./GymCardActionsContainer";
import { GymCardTitle } from "./GymCardTitle";
import { GymCardSubTitle } from "./GymCardSubTitle";

export default function GymCard({
  name = "Default name ",
  phone = "XXX XX XX XX",
  openedSince,
  gymId,
  img,
  handleDelete,
  handleEdit,
}) {
  return (
    <GymCardContainer>
      <GymCardContent>
        {/* Title */}
        <GymCardTitleContainer>
          <GymCardTitle>{name}</GymCardTitle>
        </GymCardTitleContainer>

        {/* Subtitle */}
        <GymCardSubTitleContainer>
          <GymCardSubTitle>📞 {phone}</GymCardSubTitle>
        </GymCardSubTitleContainer>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              flex: 1,
              height: "auto",
              borderRight: "1px solid black",
            }}
          >
            <p style={{ fontSize: "12px" }}>
              {moment(openedSince).format("l")}
            </p>
          </div>

          <GymCardActionsContainer>
            {/* Delete */}
            <IconButton onClick={() => handleDelete(gymId)}>
              <DeleteIcon />
            </IconButton>

            {/* Edit */}
            <IconButton
              onClick={() => handleEdit(name, phone, openedSince, gymId)}
            >
              <EditIcon />
            </IconButton>
          </GymCardActionsContainer>
        </div>
      </GymCardContent>

      <GymCardMedia src={img} />
    </GymCardContainer>
  );
}
