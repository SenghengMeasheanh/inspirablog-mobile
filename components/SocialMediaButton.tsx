import { Image } from "react-native"
import { Button } from "tamagui"

interface SocialMediaButtonProps {
	provider: "facebook" | "google" | "linkedin"
	onPress: () => void
}

const socialMediaConfig = {
	facebook: require("../assets/images/facebook.png"),
	google: require("../assets/images/google.png"),
	linkedin: require("../assets/images/linkedin.png")
}

export default function SocialMediaButton({
	provider,
	onPress
}: SocialMediaButtonProps) {
	const config = socialMediaConfig[provider]

	return (
		<Button
			height={57}
			width={57}
			justify="center"
			bg="$background06"
			shadowColor="#000"
			shadowOffset={{ width: 0, height: 2 }}
			shadowOpacity={0.2}
			shadowRadius={4}
			elevate
			elevation={1.5}
			onPress={onPress}>
			<Image
				source={config}
				style={{
					width: 24,
					height: 24,
					resizeMode: "contain"
				}}
			/>
		</Button>
	)
}
