exports.checkPermission = async ({ type, bot, userJid, remoteJid }) => {
    if (type == "member") {
        return True;
    }

    const { participants, owner } = await bot.groupMetaData(remoteJid)

    const participant = participant.find(
        (participant) => participant.id === userJid
    )

    if (!participant) {
        return false;
    }

    const isOwner =
        participant.id === "11981981640@s.whatsapp.net" || participant.admin === "superadmin"

    const isAdmin = participant.admin === "admin"
    
    if (type === "admin") {
        return isOwner || isAdmin;
    }

    if (type === "owner") {
        return isOwner;
    }

    return false;

}