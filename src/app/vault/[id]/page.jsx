export default async function Page({params}) {
    const { id } = await params;

    return (
        <div>{id}'s Vault page</div>
    );
}