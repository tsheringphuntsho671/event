 function getInvitationText() {
        return `
ECO-PACK PRESENTATION INVITATION

Dear TCM OC, ICT Students and Respected Tutors,

We are delighted to invite you to our Eco-Pack presentation,
featuring our Business Model Canvas (BMC) and our idea for
eco-friendly packaging solutions.

Date: [Enter presentation date]
Time: [Enter presentation time]
Venue: [Enter venue or classroom]

Join us to discover how sustainable packaging can help reduce
plastic waste and build a greener Bhutan.

Your presence, encouragement, and valuable feedback are highly
appreciated.

With gratitude,
The Eco-Pack Team

THINK GREEN · LIVE CLEAN
        `.trim();
    }

    async function copyInvitation() {
        const message = document.getElementById("message");

        try {
            await navigator.clipboard.writeText(getInvitationText());
            message.textContent = "Invitation copied successfully! 🌿";
        } catch (error) {
            message.textContent =
                "Copy unavailable. Please select and copy the invitation manually.";
        }
    }

    async function shareInvitation() {
        const message = document.getElementById("message");
        const text = getInvitationText();

        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Eco-Pack Presentation Invitation",
                    text: text
                });

                message.textContent = "Share window opened.";
            } catch (error) {
                if (error.name !== "AbortError") {
                    message.textContent = "Unable to share on this device.";
                }
            }
        } else {
            try {
                await navigator.clipboard.writeText(text);
                message.textContent =
                    "Sharing is unavailable here. Invitation copied instead!";
            } catch (error) {
                message.textContent =
                    "Please use Copy Invitation to share the text.";
            }
        }
    }