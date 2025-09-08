import { Text, Group } from "@mantine/core";
import { type FooterProps } from "../libs/Footer";
export default function Footer(probs:FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        © {probs.courseName}-{probs.year} {probs.fullName} {probs.studentId}. All rights reserved.
      </Text>
    </Group>
  );
}
// courseName: string;
//   year: string;
//   fullName: string;
//   studentId: string | number;
